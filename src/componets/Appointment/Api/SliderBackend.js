import axios from 'axios'
import React from 'react'

function SliderBackend() {
    useEffect(() => {
        const sliderData = async () => {
            const response = await axios.post('http://localhost:8000/api/appointment/addClass',
                {
                    date,
                    time,
                    score,
                    last_session,
                    type,
                    feedback,
                },
                {
                    withCredentials: true
                }
            )
            console.log(response.data)
        }
        sliderData();
    }, [])
    return (
        <div>

        </div>
    )
}

export default SliderBackend