// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './style'; // Importa os estilos

const Login = () => {
    const [cpfOrCard, setCpfOrCard] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticação aqui - devemos fazer isso com calma depois
    console.log(`Usuário: ${cpfOrCard}, Senha: ${password}`);
    navigate('/menu1');
  };

  const handleForgotPassword = () => {
    // Lógica para lidar com esquecimento de senha - não sei o que fazer caso a pessoa esqueça a senha hahahaha
    console.log('Esqueci minha senha');
  };

  const handleSignUp = () => {
    // Lógica para redirecionar para a página de cadastro - aqui precisamos fazer um formulário para autenticar se a pessoa é cadastrada em algum convênio
    console.log('Redirecionar para a página de cadastro');
  };

  return (
    <div style={{ ...styles.container, ...styles.font }}>
      <div style={styles.formContainer}>
        <h2 style={styles.font}>Login PEP</h2>
        <div style={styles.inputContainer}>
          <img
            src="../components/logo.jpg" // Não estou conseguindo puxar a imagem
            alt="Logo"
            style={{
              width: '60%',
              opacity: 0.6,
              marginBottom: '10px',
            }}
          />
          <label style={styles.font}>
            CPF ou Número da Carteirinha:
            <br />
            <input
              type="text"
              value={cpfOrCard}
              onChange={(e) => setCpfOrCard(e.target.value)}
            />
          </label>
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.font}>
            Senha:
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button style={{ ...styles.button, ...styles.font }} onClick={handleLogin}>
          LOGAR
        </button>
        <button
          style={{
            ...styles.button,
            ...styles.font,
            backgroundColor: '#3498db', // Melhorar a cor conforme necessário (ainda não consegui pensar em uma cor legal)
            marginLeft: '10px', // Melhorar o espaço entre os botões (acho que dá pra discutir isso depois)
          }}
          onClick={handleSignUp}
        >
          Cadastrar-se
        </button>
        <div style={{ ...styles.forgotPassword, ...styles.font }}>
          <p>
            <a href="#" onClick={handleForgotPassword} style={styles.font}>
              Esqueci minha senha
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
