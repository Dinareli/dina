# Configuração do EmailJS

Para que o formulário de contato funcione corretamente, você precisa configurar o EmailJS. Siga estas etapas:

## 1. Criar conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Faça login no painel

## 2. Configurar o serviço de e-mail

1. No painel do EmailJS, vá para "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de e-mail (Gmail, Outlook, etc.)
4. Configure a autenticação
5. Anote o **Service ID** gerado

## 3. Criar template de e-mail

1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use este template como base:

```html
<h2>Nova mensagem do formulário de contato</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>E-mail:</strong> {{from_email}}</p>
<p><strong>Mensagem:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>Esta mensagem foi enviada através do formulário de contato do seu site.</em></p>
```

4. Anote o **Template ID** gerado

## 4. Obter a Public Key

1. Vá para "Account" > "API Keys"
2. Copie sua **Public Key**

## 5. Configurar no projeto

1. Abra o arquivo `src/config/emailjs.ts`
2. Substitua os valores pelos seus IDs reais:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'seu_service_id_aqui',
  TEMPLATE_ID: 'seu_template_id_aqui',
  PUBLIC_KEY: 'sua_public_key_aqui'
};
```

## 6. Testar

1. Execute o projeto
2. Preencha o formulário de contato
3. Clique em "Enviar Mensagem"
4. Verifique se o e-mail foi recebido em dina.devweb@gmail.com

## Notas importantes

- O plano gratuito do EmailJS permite até 200 e-mails por mês
- Para produção, considere um plano pago
- Mantenha suas chaves seguras e não as compartilhe publicamente
- O EmailJS funciona apenas no frontend, não é necessário backend

## Solução de problemas

- **Erro 400**: Verifique se os IDs estão corretos
- **Erro 401**: Verifique se a Public Key está correta
- **E-mail não chega**: Verifique a pasta de spam e as configurações do provedor de e-mail
