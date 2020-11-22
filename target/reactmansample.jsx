class sample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        whatsup: "sopsaolpsado",
        whatsup2: "fikodikosdfi"
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value    });
    }
  
    render() {
      return (
        <div>Hello World</div>
      );
    }
  }