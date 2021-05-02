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
            return ctx.Posts.ToList();
        }
    }
}
