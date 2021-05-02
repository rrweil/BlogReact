using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;


namespace HW5._1._21BlogReact.Data
{
    public class Comment
    {
        public int Id { get; set; }
        public string CommentorName { get; set; }
        public string CommentText { get; set; }
        public DateTime CommentDate { get; set; }

        public int PostId { get; set; }

        [JsonIgnore]
        public Post Post { get; set;  }
    }
}
