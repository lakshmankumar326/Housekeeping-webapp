using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Housekeepings.API.Migrations
{
    public partial class initial1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Complaint",
                table: "Housekeepings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Feedback",
                table: "Housekeepings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ServiceIsApproved",
                table: "Housekeepings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ServiceRequest",
                table: "Housekeepings",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Complaint",
                table: "Housekeepings");

            migrationBuilder.DropColumn(
                name: "Feedback",
                table: "Housekeepings");

            migrationBuilder.DropColumn(
                name: "ServiceIsApproved",
                table: "Housekeepings");

            migrationBuilder.DropColumn(
                name: "ServiceRequest",
                table: "Housekeepings");
        }
    }
}
