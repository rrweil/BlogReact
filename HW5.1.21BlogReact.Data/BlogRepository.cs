using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace HW5._1._21BlogReact.Data
{
    public class BlogRepository
    {
        private string _connectionString;

        public BlogRepository(String connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddPost(Post post)
        {
            using var ctx = new BlogDataContext(_connectionString);
            ctx.Posts.Add(post);
            ctx.SaveChanges();
        }

        public List<Post> GetPosts()
        {
            using var ctx = new BlogDataContext(_connectionString);
            return ctx.Posts.OrderByDescending(p => p.DatePosted).Include(p => p.Comments).ToList();
        }

        public int GetTotalPostCount()
        {
            using var ctx = new BlogDataContext(_connectionString);
            return ctx.Posts.Count();
        }

        public Post GetPostById (int id)
        {
            using var ctx = new BlogDataContext(_connectionString);
            return ctx.Posts.Include(p => p.Comments).FirstOrDefault(p => p.Id == id);
        }

        public void AddComment (Comment comment)
        {
            using var ctx = new BlogDataContext(_connectionString);
            ctx.Comments.Add(comment);
            ctx.SaveChanges();
        }

        public int GetMostRecentPostId()
        {
            using var ctx = new BlogDataContext(_connectionString);
            return ctx.Posts.OrderByDescending(p => p.DatePosted).Select(p => p.Id).FirstOrDefault();
        }
    }
}
