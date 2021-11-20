import { TwitterTimelineEmbed } from 'react-twitter-embed';
import './Twitter.css'

export default function Twitter() {
    return (
        <div className='Twitter'>
            <div className='twitter_container'>
                <TwitterTimelineEmbed 
                    sourceType="profile" 
                    url='https://twitter.com/HopeEsportHS' 
                    options={{height: 400, width: 400}}
                    className='twitter_feed' 
                />
            </div>
        </div>
    )
}
