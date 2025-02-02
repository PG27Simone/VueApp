<script>
    export default {
        name: 'ContactForm',
    
    data(){
        return {
           
        }
    },

}
</script>

<template>
    <div class="contact-form">
    <form>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" placeholder="First name..." required>

        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" placeholder="Last name..." required>

        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="firstlast@email.com" required>

        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="1234567891" pattern="[0-9]{3}[0-9]{3}[0-9]{4}">

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Reason for contact..." style="height:150px" required></textarea>

        <input type="submit" value="Submit">
    </form>
        
    </div>

</template>

<style scoped>

.contact-form{
    width: 50%;
    margin-top: 20px;
    border-radius: 5px;
    padding: 20px;
    margin: auto;
}

input[type=text], input[type=email],input[type=tel], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #05754a;
  color: white;
  border:none;
  margin: auto;
  display: block;
  border-radius: 4px;
  cursor: pointer;
  padding: 16px 20px;

}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>