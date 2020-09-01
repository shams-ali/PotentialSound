import React from 'react';

const HomeFeed = (props) => {

    return (
        <div>
            <h1>
				PotentialSound
				<div style={{ width: "100px", height: "100px", borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
					<img src="https://tinyurl.com/y3h5vk9r" alt="Avatar" style={{ width: "auto", height: "100%", display: 'inline', margin: '0 auto', marginLeft: '-25%' }}/>
				</div>
				<button type="button">MENU</button>
			</h1>
			<div>
				<input type="text" placeholder="Search for Post" style={{  width: '500px', height: '30px', fontSize: '14px', paddinLeft: '10px' }}></input>
				<button type="button" style={{ borderRadius: '5px' }}>
					<img src="https://tinyurl.com/y2v9h8rz" style={{ width: "15%", height: "15%" }}/>
				</button>
				<div>
					<button type="button" style={{ fontSize: '20px', padding: '5px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '5px' }}>Creat A Post</button>
				</div>
			</div>
			<div style={{  backgroundColor: 'rgb(40, 84, 52)', height: '500px' }}>
				<h1>General Feed</h1>
				<h2>POST</h2>
				<h2>POST</h2>
				<h2>POST</h2>
				<h2>POST</h2>
				<h2>POST</h2>
				<h2>POST</h2>
			</div>
        </div>
    );
}

export default HomeFeed