class hello2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dsg: true,
        cvxcx: 2
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
              name="dsg"            
              type="checkbox"
              checked={this.state.dsg}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="cvxcx"            
              type="number"
              value={this.state.cvxcx}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }