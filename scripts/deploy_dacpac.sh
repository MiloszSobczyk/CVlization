#!/bin/bash
set -e

/opt/mssql/bin/sqlservr &

# Wait for SQL Server to be ready
until /opt/mssql-tools18/bin/sqlcmd -S localhost -U sa -P ${DB_PASSWORD} -C -Q "SELECT 1" > /dev/null 2>&1; 
do
  sleep 1
  echo "Still Waiting for SQL Server to be available..."
done

# Deploy DACPAC
/opt/sqlpackage/sqlpackage \
    /Action:Publish \
    /SourceFile:/var/opt/Database.dacpac \
    /TargetServerName:localhost,${DB_PORT} \
    /TargetDatabaseName:CV_Database \
    /TargetUser:sa \
    /TargetPassword:${DB_PASSWORD} \
    /SourceTrustServerCertificate:True \
    /TargetTrustServerCertificate:True \
    /Quiet

echo "DACPAC deployed"
