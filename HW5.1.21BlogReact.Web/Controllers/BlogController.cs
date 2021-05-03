using HW5._1._21BlogReact.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HW5._1._21BlogReact.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {

        private string _connectionStriong;

        public BlogController(IConfiguration configuration)
        {
            _connectionStriong = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addPost")]
        public void AddPost(Post post)
        {
            var repo = new BlogRepository(_connectionStriong);
            post.DatePosted = DateTime.Now;
            repo.AddPost(post);
        }

        [HttpGet]
        [Route("getPosts")]
        public List<Post> GetPosts()
        {
            var repo = new BlogRepository(_connectionStriong);
            return repo.GetPosts();
        }

        [HttpGet]
        [Route("getPostById")]
        public Post GetPostById (int id)
        {
            var repo = new BlogRepository(_connectionStriong);
            return repo.GetPostById(id);
        }

        [HttpPost]
        [Route("addComment")]
        public void AddComment(Comment comment)
        {
            var repo = new BlogRepository(_connectionStriong);
            comment.CommentDate = DateTime.Now;
            repo.AddComment(comment);
        }

        [HttpGet]
        [Route("getMostRecentPostId")]
        public int GetMostRecentPostId()
        {
            var repo = new BlogRepository(_connectionStriong);
            return repo.GetMostRecentPostId();
        }

    }
}
