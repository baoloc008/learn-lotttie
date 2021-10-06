import Lottie from 'react-lottie-player'
import LottiePlayerLight from 'react-lottie-player/dist/LottiePlayerLight'
import lottieJson from './line.json'

function App() {
  return (
    <div>
      hello
      <Lottie
        loop
        animationData={lottieJson}
        play
        renderer="canvas"
      />
      <Lottie
        loop
        animationData={lottieJson}
        play
        renderer="svg"
      />
      <LottiePlayerLight
        loop
        animationData={lottieJson}
        play
        renderer="svg"
      />
    </div>
  )
}

export default App;
