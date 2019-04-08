import React from 'react';

const Forms = (props) => {
  return (
      <form onSubmit={props.loadWeather}>
        <input type="text" name="city" placeholder="City..." />
        <input type="text" name="country" placeholder="Country..." />
        <button>Get Weather</button>
      </form>
  )
}
export default Forms;
