import React from 'react';

const TITLES = [
  "Pick 2 Free Samples With Any Purchase",
  "Free 3-day shipping over $50",
  "Sign Up For Our Emails For Exclusive Deals"
]

class Title extends React.Component {
  constructor(props) {
    super(props)

    this.state = { titleIndex: 0, fadeIn: true };
    this.animateTitles = this.animateTitles.bind(this);
  }


  componentDidMount() {
    this.timeout = setTimeout(() => { this.setState({ fadeIn: false }) }, 2000);
    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles() {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      
      this.setState({ titleIndex, fadeIn: true });

     this.timeout = setTimeout(() => { this.setState({ fadeIn: false }) }, 2000);
    }, 3500)
  }
  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];
   
    return (
      <p id="title-ads" 
        className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        {title}
      </p>
    )
  }
}

export default Title; 
