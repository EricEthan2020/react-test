import React from 'react';
import Swal from 'sweetalert2';

function TodoApp() {

  const clear = () => {
    const testUl = document.getElementById('testUl');

    if (testUl.children.length > 0) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: true
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        confirmButtonColor: "#ff8080",
        cancelButtonColor:"#4d4d4d",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            timer:600,
            timerProgressBar:true
          });
          const li_list = document.querySelectorAll(".li-item");

          li_list.forEach((li) => {
            li.remove();
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            confirmButtonColor:"#4d4d4d",
            title: "Cancelled",
            text: "U cancel for deletation!",
            icon: "error"
          });
        }
      });

    } else {

      Swal.fire({
        icon: 'warning',
        text: "Empty List Item"
      })

    }
  };


  const handleAdd = () => {
    const inputValue = document.getElementById('inp1').value.trim();

    if (inputValue === '') {
      Swal.fire({
        title:"Enter Your Todo item?",
        text:"404 Not Found",
        confirmButtonColor:"#4d4d4d",
        icon:"warning"
      })
      return;
    }

    const testUl = document.getElementById('testUl');
    const testli = document.createElement('li');
    testli.className = 'li-item p-5 bg-slate-200 items-center justify-between flex flex-row rounded my-3';
    testli.innerHTML = `
      <span>
        <button>
          <svg class="text-blue-600 font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="20px">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </button>
      </span>
      <span className='text-black font-serif font-bold'>${inputValue}</span>
      <div className=''>
        <svg class="text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" width="20px">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      </div>
    `;
    testUl.appendChild(testli);
    Swal.fire({
      position:"bottom",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 400,
      timerProgressBar:true
    });

    document.getElementById('inp1').value = '';
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col mb-5 p-28'>
        <label htmlFor='' className='block mb-16 mx-auto text-blue-500 text-4xl font-bold'>
          TOo. DOo.
        </label>
        <form className='flex flex-row gap-2 justify-center items-center'>
          <input id='inp1' className='py-3' type='text' />
          <button
            className='py-4 px-8 rounded bg-gray-200'
            type='button'
            onClick={handleAdd}
          >
            Add
          </button>
          <button className='py-4 px-8 rounded bg-red-300'
            type='button'
            onClick={clear}
          >Clear</button>
        </form>
        <br />
        <ul id='testUl' className='flex flex-col w-auto'>
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
