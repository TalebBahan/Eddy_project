import React from 'react'

export default function YoutubeCard() {
    return (
        <div>
            <iframe
                style={{
                    width: '300px',
                    minHeight: '200px',
                }}
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/2WE84iUONec?autoplay=0`}
            />
        </div>
    )
}
