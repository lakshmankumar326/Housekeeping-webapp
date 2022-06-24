using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Housekeepings.API.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Housekeepings",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Date = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TimeReq = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TimeIn = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TimeOut = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Feddback = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Complaint = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    serviceRequest = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    serviceIsApproved = table.Column<string>(type: "nvarchar(max)", nullable: false),
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Housekeepings", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Housekeepings");
        }
    }
}
