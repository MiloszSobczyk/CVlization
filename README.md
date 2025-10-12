# CVlization

A full-stack application built with **ASP.NET Core** and **React**. Application offers containerization support and has a fully set-up Docker environment.
The database schema is deployed using a `.dacpac` file that must be **manually published**.

---

## Setup Instructions

### Configure environment

Create a `.env` file based on `.env.template` file.

---

## Running the application

### Build and start containers

You can start everything using Docker Compose:

```bash
docker-compose up --build
```

This will:

- Start the **SQL Server container (`CVlizationDB`)**
- Start the **ASP.NET Core backend container (`CVlizationApi`)**

---

## Updating the Database

Whenever you change the SQL project (`.sqlproj`) and rebuild it:

1. Ensure the `.dacpac` is re-generated (`Build` → `Rebuild` in Visual Studio).
2. Publish the database into the container, for example using a Visual Studio publishing profile:

```xml
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="Current" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <PropertyGroup>
    <IncludeCompositeObjects>True</IncludeCompositeObjects>
    <TargetDatabaseName>CVlization_Main</TargetDatabaseName>
    <DeployScriptFileName>CVlizationDB</DeployScriptFileName>
    <ProfileVersionNumber>1</ProfileVersionNumber>
    <TargetConnectionString>Data Source=localhost;Persist Security Info=True;User ID=sa;Pooling=False;Multiple Active Result Sets=False;Connect Timeout=60;Encrypt=True;Trust Server Certificate=True;Command Timeout=0</TargetConnectionString>
    <BlockWhenDriftDetected>False</BlockWhenDriftDetected>
    <RegisterDataTierApplication>False</RegisterDataTierApplication>
  </PropertyGroup>
</Project>
```

If the database structure gets corrupted or you want a clean start:

```bash
docker-compose down -v
docker-compose up --build
```
---

## Notes

- The SQL Server container uses a volume to retain data between runs.
- The DACPAC deployment process updates the schema **non-destructively** (it preserves data unless schema conflicts occur).

---

## Running Frontend

Run command:

```bash
npm run dev
```
