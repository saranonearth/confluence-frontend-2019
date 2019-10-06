import React from 'react';
import '../../casette.css';
const Cassete = () => {
  return (
    <div>
      <div class='cassette'>
        <div class='label'>
          <div class='text'>Awesome mix vol. 2</div>

          <div class='central'>
            <div class='tape left'>
              <div class='arc'>
                <div class='axis'></div>
              </div>
            </div>
            <div class='tape right'>
              <div class='arc'>
                <div class='axis'></div>
              </div>
            </div>
          </div>
        </div>

        <div class='bottom'>
          <div class='screw'></div>
          <div class='inner'>
            <div class='screw'></div>
            <div class='screw'></div>
          </div>
          <div class='screw'></div>
        </div>
      </div>
    </div>
  );
};

export default Cassete;
