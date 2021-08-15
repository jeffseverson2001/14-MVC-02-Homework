const editBlogHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-blog-edit').value.trim();
    const content = document.querySelector('#content-blog-edit').value.trim();

    if (title && content) {
      const response = await fetch('/api/blogs/', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };


  document.querySelector('#edit-blog-button').addEventListener('submit', editBlogHandler);

