using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using application.Models;

namespace application.Controllers
{
    [Route("api/book/[controller]")]
    [ApiController]
    public class UploadController : ControllerBase
    {


        [HttpPost,DisableRequestSizeLimit]
        public ActionResult<string> PostBook()
        {
            var file = Request.Form.Files[0];
            string folderName = "~/wwwroot/uploads";
            if(Directory.Exists(folderName))
            {
                if(file.Length > 0)
                {
                    string fileName = Guid.NewGuid().ToString();
                    string fullPath = Path.Combine(folderName,fileName);
                    using(var stream = new FileStream(fullPath,FileMode.Create))
                    {
                        file.CopyTo(stream);
                        return fullPath;
                    }
                }
            }
            return "Detected an unhandled error";
        }

    }
}
