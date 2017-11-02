var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"apple"},{"id":2,"text":"cheeses"},{"id":3,"text":"potatoes"},{"id":4,"text":"bananaes"}];

var List=createReactClass({
  render: function(){
    var listItems=ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />;
    });

    return (<ul> {listItems} </ul>);
  }
});

module.exports=List;
