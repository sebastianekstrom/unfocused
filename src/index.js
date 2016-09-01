const Unfocused = (unFocusTitle) => {

    if (typeof document.hidden !== 'undefined') {
      const initialTitle = document.title;

      document.addEventListener('visibilitychange', () => {
        document.title = document['visibilityState'] === 'hidden' ?
          unFocusTitle : initialTitle
      })

    }

}

 export default Unfocused
