import React, { Component } from "react";
import Message from "./Message";
import "./App.css";

const DUMMY_DATA = [
  {
    senderID: "abe",
    text: "yo yo"
  },

  {
    senderID: "joe",
    text: "yo abe"
  },

  {
    senderID: "abe",
    text: "yo jo"
  }
];
class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {
          return (
            <Message
              key={index}
              username={message.senderId}
              text={message.text}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
