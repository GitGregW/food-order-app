import useFetch from '../hooks/useFetch.js';
import { postOrder } from '../http.js';

export default function OrderConfirmation({ formData }){
    const {isFetching: isSaving, error, fetchedData: orderMessage} = useFetch(() => postOrder(formData), []);

    return (
        <div className="control" style={{color: '#46443c'}}>
            <h2>Order Confirmation</h2>
            { isSaving && <p>Placing Order...</p> }
            { error && <p>{error.message}</p> }
            { orderMessage.message && <>
                    <p>Your order was submitted succesfully.</p>
                    <p>We will get back to you with more details via email within the next few minutes.</p>
                </>
            }
        </div>
    );
}