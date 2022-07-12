using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace application.Models
{
    public partial class amaliyotContext : DbContext
    {
        public amaliyotContext()
        {
        }

        public amaliyotContext(DbContextOptions<amaliyotContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Book> Books { get; set; } = null!;
        public virtual DbSet<Catigory> Catigories { get; set; } = null!;
        public virtual DbSet<Comment> Comments { get; set; } = null!;
        public virtual DbSet<SavedBook> SavedBooks { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("books");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Authors)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("authors");

                entity.Property(e => e.CatigorieId).HasColumnName("catigorie_id");

                entity.Property(e => e.Img)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("img");

                entity.Property(e => e.Pages).HasColumnName("pages");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Publisher)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("publisher");

                entity.Property(e => e.Title)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("title");

                entity.Property(e => e.Website)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("website");

                entity.HasOne(d => d.Catigorie)
                    .WithMany(p => p.Books)
                    .HasForeignKey(d => d.CatigorieId)
                    .HasConstraintName("FK__books__catigorie__3F466844");
            });

            modelBuilder.Entity<Catigory>(entity =>
            {
                entity.ToTable("catigories");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.CatigorieName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("catigorie_name");
            });

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("comments");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.BookId).HasColumnName("book_id");

                entity.Property(e => e.Raiting).HasColumnName("raiting");

                entity.Property(e => e.Text)
                    .HasColumnType("text")
                    .HasColumnName("text");

                entity.Property(e => e.UserId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("user_id");

                entity.HasOne(d => d.Book)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.BookId)
                    .HasConstraintName("FK__comments__book_i__3E52440B");
            });

            modelBuilder.Entity<SavedBook>(entity =>
            {
                entity.ToTable("saved_books");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.BookId).HasColumnName("book_id");

                entity.Property(e => e.UserId)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("user_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
