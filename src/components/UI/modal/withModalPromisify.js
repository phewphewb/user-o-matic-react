import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const withModalPromisify = (Component) =>
  forwardRef((props, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const resolveRef = useRef(null);
    const rejectRef = useRef(null);

    const open = () => {
      setIsOpen(true);
      return new Promise((ok, fail) => {
        resolveRef.current = ok;
        rejectRef.current = fail;
      });
    };

    const close = () => {
      setIsOpen(false);
      rejectRef.current("Closed by parent");
    };

    useImperativeHandle(ref, () => ({
      open,
      close,
    }));

    const resolve = (data) => {
      setIsOpen(false);
      resolveRef.current(data);
    };

    const reject = (message) => {
      setIsOpen(false);
      rejectRef.current(message);
    };

    if (!isOpen) return null;
    return <Component reject={reject} resolve={resolve} {...props} />;
  });

export default withModalPromisify;
