class hello extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        whatsup: true,
        whatsup2: 2
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
        <form>
          <label>
            Is going:
            <input
              name="whatsup"            
              type="checkbox"
              checked={this.state.whatsup}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="whatsup2"            
              type="number"
              value={this.state.whatsup2}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }