<div>
  <div className="sidebar-nav panel panel-default">
    <div className="panel-heading">Admin Menu</div>
    <div className="list-group">
      <a href="#" className="list-group-item active"><i className="glyphicon glyphicon-home"></i> Dashboard</a>
      <a href="#" className="list-group-item"><i className="glyphicon glyphicon-envelope"></i> Messages <i className="badge badge-info">4</i></a>
      <a href="#" className="list-group-item"><i className="glyphicon glyphicon-comment"></i> Comments <i className="badge badge-info">10</i></a>
      <a href="#" className="list-group-item"><i className="glyphicon glyphicon-user"></i> Members</a>
      <div className="divider"></div>
      <a href="#" className="list-group-item"><i className="glyphicon glyphicon-comment"></i> Settings</a>
      <a href="#" className="list-group-item"><i className="glyphicon glyphicon-share"></i> Logout</a>
    </div>
  </div>
</div>

.sidebar-nav {
    background: #f5f5f5;
    border-color: #428bca;
    width: 300px;
    margin: 10px;
}
.sidebar-nav > .panel-heading {
    background: #428bca;
    color: #ffffff;
    border-bottom: 0;
}
.sidebar-nav a {
    background: #f5f5f5;
    color: #428bca;
}
.sidebar-nav a:hover,
.sidebar-nav a:focus {
    color: #ffffff;
    background: #428bca;
}
.sidebar-nav a:hover .badge,
.sidebar-nav a:focus .badge {
    color: #428bca;
    background: #ffffff;
}
.sidebar-nav a .badge {
    background-color: #428bca;
}
.sidebar-nav > .list-group .list-group-item {
    border: 0;
}
.sidebar-nav .divider {
    background-color: #428bca;
    height: 1px;
    margin: 1px 0 0;
    overflow: hidden;
}
