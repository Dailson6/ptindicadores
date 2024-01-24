// login.js

const usersData = [
    { username: 'dmartins', password: 'dm1002' },
    { username: 'dbarbosa', password: 'd02nj1' },
     { username: 'aestella', password: 'avenp03j2' },
     { username: 'ylima', password: 'ylmeng0j3' },
     { username: 'amoraes', password: 'amplay05j3' },
     { username: 'asasilva', password: 'asatrue02j4' },
     { username: 'tfonseca', password: 'tfpk6j5' },
    { username: 'cwsantos', password: 'cwert8j6' },
    { username: 'alexandre.pedro', password: 'alert90j7' },









    
    // Adicione mais usuários conforme necessário
  ];
  
  function validateLogin(event) {
    event.preventDefault();
  
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
  
    const isValidUser = usersData.some(user => user.username === enteredUsername && user.password === enteredPassword);
  
    if (isValidUser) {
      Swal.fire({
        title: "Olá!",
        text: "Login realizado com sucesso!",
        icon: "success"
      });
      setTimeout(() => {
        window.location.href = 'indexteste.html';
        
      }, 1000);
    } else {
      
      Swal.fire({
        title: "Erro",
        text: "Verifique os dados inseridos!",
        icon: "error"
      });
    }
    
  }
  
