var MessageForm = React.createClass({
  render: function(){
    return (
      <form className="commentForm">
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Messege" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});