import React from 'react';
import {format} from 'url';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  // constructor () {
  //   super ();
  //   this.goToStore = this.goToStore.bind (this);
  // }

  goToStore (event) {
    event.preventDefault ();
    console.log ('You changed the URL');
    // first grab the text from the box
    const storeId = this.storeInput.value;
    console.log (`Going to ${storeId}`);
    // second transition from / to /store/:storeId
    this.context.router.transitionTo (`/store/${storeId}`);
  }
  render () {
    return (
      <form className="store-selector" onSubmit={e => this.goToStore (e)}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName ()}
          ref={input => {
            this.storeInput = input;
          }}
        />
        <button type="submit">Visit store -></button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object,
};

export default StorePicker;
