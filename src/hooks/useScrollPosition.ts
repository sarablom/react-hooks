const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState({
    x: 0,
    y: 0,
  });

  React.useEffect(() => {
    function handleScrollMove(event) {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    }

    window.addEventListener('scroll', handleScrollMove);

    return () => {
      window.removeEventListener('scroll', handleScrollMove);
    };
  }, []);

  return scrollPosition;
};
