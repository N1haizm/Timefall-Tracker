import { forwardRef,useImperativeHandle, useRef } from 'react'
import { createPortal } from 'react-dom'

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset}, ref) {
  const dialog = useRef()

  const youLost = remainingTime <=0
  const timeLeft = (remainingTime / 1000).toFixed(2)
  const score = Math.round((1 - remainingTime/(targetTime * 1000)) * 100)

  useImperativeHandle(ref, () => {
    return {
        open(){
            dialog.current.showModal()
        }
    }
  })
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {youLost && <h2>You lost.</h2>}
      {!youLost && <h2>Your score: {score}.</h2>}
      <p>
        The target time was <strong>{targetTime}seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{timeLeft} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
    , document.getElementById('modal')
  );
}
)

export default ResultModal
