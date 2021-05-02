using System;
using System.Collections.Generic;

namespace HW5._1._21BlogReact.Data
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set;  }
        public DateTime DatePosted { get; set; }

        public List<Comment> Comments { get; set; }
    }
}
