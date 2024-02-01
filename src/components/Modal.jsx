import { createPortal } from "react-dom";
import { forwardRef } from "react";

const Modal = forwardRef(function Modal({ children, buttonText, setActiveModal, handleModalAction }, ref){
    return createPortal(
        <dialog ref={ref} className="modal">
            <form onSubmit={handleModalAction}>
                { children }
                <div className="modal-actions">
                    {true && <button
                        type="button"
                        className="text-button"
                        onClick={() => setActiveModal(prevActiveModal => null)}
                            >close</button>}
                    <button className="button">
                        { buttonText }
                    </button>
                </div>
            </form>
        </dialog>
    , document.getElementById('modal'));
});
export default Modal;