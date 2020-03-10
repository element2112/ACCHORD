// import React, { Component } from 'react'
// import { Col, Form, Row } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
// import send_playlist from '../services/send_playlist'
// import { stringify } from 'query-string';
// import axios from 'axios'

// // send chords over from here
// export class Chordcomp extends Component {

//   constructor() {
//     super();
//     this.state = {
//       chord1: '',
//       chord2: '',
//       chord3: '',
//       chord4: ''
//     }

//     this.handleChord1Change = this.handleChord1Change.bind(this);
//     this.handleChord2Change = this.handleChord2Change.bind(this);
//     this.handleChord3Change = this.handleChord3Change.bind(this);
//     this.handleChord4Change = this.handleChord4Change.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   async handleChord1Change(e) {
//     e.preventDefault();
//     this.setState({ chord1: e.target.value })
//     // console.log(this.state.chord1)
//   }

//   async handleChord2Change(e) {
//     e.preventDefault();
//     this.setState({ chord2: e.target.value })
//   }

//   async handleChord3Change(e) {
//     e.preventDefault();
//     this.setState({ chord3: e.target.value })
//     // console.log(this.state.chord1)
//   }

//   async handleChord4Change(e) {
//     e.preventDefault();
//     this.setState({ chord4: e.target.value })
//     // console.log(this.state.chord1)
//   }

//   async handleSubmit(e) {
//     e.preventDefault();
//     console.log(this.state);

//     // const res = await axios.get('http://localhost:4000/api/users/songs', )

//     // const res = await axios.get('http://localhost:4000/api/users/songs', {

//     //   headers: {'Content-Type': 'application/json'},
//     //   body: JSON.stringify({
//     //     "cp": `${this.state.chord1},${this.state.chord2}`
//     //   }),
//     // })
//     const send = await send_playlist([this.state.chord1, this.state.chord2, this.state.chord3, this.state.chord4]);


//     // const artist = send[0].artist;
//     // const song = send[0].song;

//     // console.log('send ' + JSON.stringify(send));
//     // console.log('artist ' + artist);
//     // console.log('artist ' + song);

//     //   console.log('send: '+ JSON.stringify(send));
//     // // } catch (err)
//     // {
//     //   console.log('error getting your playlist. Make sure you are logged into spotify: ' + err);
//     // }
//   }

//   render() {
//     // console.log(this.state)
//     return (
//       <div>
//         <Form onSubmit={this.handleSubmit}>
//           <select onClick={this.handleChord1Change}>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//           </select>
//           <select onClick={this.handleChord2Change}>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//           </select>
//           <select onClick={this.handleChord3Change}>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option>7</option>
//           </select>
//           <select onClick={this.handleChord4Change}>
//                 <option>1</option>
//                 <option>2</option>
//                 <option>3</option>
//                 <option>4</option>
//                 <option>5</option>
//                 <option>6</option>
//                 <option></option>
//           </select>
//           <Button type="submit">Submit</Button>
//         </Form>
//       </div>
//     )
//   }
// }

// export default Chordcomp
