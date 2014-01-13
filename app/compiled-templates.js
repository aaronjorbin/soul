this["Templates"] = this["Templates"] || {};
this["Templates"]["article"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<article class=\"");_.b(_.v(_.f("type",c,p,0)));_.b(" format-");_.b(_.v(_.f("format",c,p,0)));_.b("\">");_.b("\n" + i);_.b("<header>");_.b("\n" + i);_.b("<h1><a href=\"");_.b(_.v(_.f("link",c,p,0)));_.b("\">");_.b(_.t(_.f("title",c,p,0)));_.b("</a></h1>");_.b("\n" + i);_.b("</header>");_.b("\n" + i);_.b("<div class=\"entry-content\">");_.b("\n" + i);_.b("");_.b(_.t(_.f("content",c,p,0)));_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<footer>");_.b("\n" + i);_.b("Posted by ");_.b(_.v(_.d("author.name",c,p,0)));_.b(" on <span class=\"post_date\">");_.b(_.v(_.f("date",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("</footer>");_.b("\n" + i);_.b("</article>");return _.fl();;});
this["Templates"]["comment"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"comment\">");_.b("\n" + i);_.b("<span class=\"fn n\">");_.b(_.v(_.d("author.name",c,p,0)));_.b("</span>");_.b("\n" + i);_.b("<img src=\"");_.b(_.v(_.d("author.avatar",c,p,0)));_.b("\" />");_.b("\n" + i);_.b("<article class=\"comment-content\">");_.b("\n" + i);_.b("");_.b(_.t(_.f("content",c,p,0)));_.b("\n" + i);_.b("</article>");_.b("\n" + i);_.b("</div>");return _.fl();;});
this["Templates"]["comments/before"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<h2>Comments</h2>");return _.fl();;});
this["Templates"]["index"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");if(_.s(_.f("posts",c,p,1),c,p,0,10,26,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("article",c,p,""));});c.pop();}_.b(_.rp("nav",c,p,""));return _.fl();;});
this["Templates"]["nav"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<nav class=\"navigation cf\">");_.b("\n" + i);if(_.s(_.f("prevpage",c,p,1),c,p,0,42,60,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("nav/prev",c,p,""));});c.pop();}if(_.s(_.f("nextpage",c,p,1),c,p,0,88,106,"{{ }}")){_.rs(c,p,function(c,p,_){_.b(_.rp("nav/next",c,p,""));});c.pop();}_.b("</nav>");return _.fl();;});
this["Templates"]["nav/next"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"nav next\">");_.b("\n" + i);_.b("<a href=\"");_.b(_.v(_.f("nextpage",c,p,0)));_.b("\">Older <span class=\"sep\">&#8250;</span></a>");_.b("\n" + i);_.b("</div>");_.b("\n");return _.fl();;});
this["Templates"]["nav/prev"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div class=\"nav prev\">");_.b("\n" + i);_.b("<a href=\"");_.b(_.v(_.f("prevpage",c,p,0)));_.b("\"><span class=\"sep\">&#8249;</span> Newer</a>");_.b("\n" + i);_.b("</div>");_.b("\n");return _.fl();;});

if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = this["Templates"];
}