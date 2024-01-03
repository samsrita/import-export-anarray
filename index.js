const Button = (props) => {
  //  Write your code here.
  const { className, name } = props;

  return <Button className={"button ${className}"}>{name}</Button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="hd">Social Buttons</h1>
    <div className="buttons-cont">
      <Button name="Like" className="like-btn" />
      <Button name="Comment" className="com-btn" />
      <Button name="Share" className="share-btn" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
