<script setup>
    import NavBarComponent from '../components/NavBarComponent.vue'
    import { ref, reactive, computed} from 'vue'
    import { useVuelidate } from '@vuelidate/core'
    import { required, email, maxLength } from "@vuelidate/validators";
    import { helpers } from "@vuelidate/validators";
    import { minLength } from "../validators/minLength";
    import { onChecked } from "../validators/onChecked";

    const form = ref(null)
    // const requiredMaxTextLength = ref(20)
    
    const formData = reactive({
        name: "",
        email: "",
        phone: "",
        message: "",
        checked: false,
    })
    
    
    
    const validations = {
        formData: {
            name: { required },
            email: { required, email },
            phone: {},
            message: {
                required,
                maxLength: maxLength(20),
                minLength: helpers.withMessage("this value min 5", minLength),
            },
            checked: {
                required,
                onChecked: helpers.withMessage("Value is required", onChecked),
            }
        }
    }
    const v$ = useVuelidate(validations, {formData})

    const submit = async() => {
        const isFormCorrect = ref(await v$.value.$validate())
   
       
        
      if (!isFormCorrect.value) return;

        let messageObj = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            checked: formData.checked,
        };

        fetch("http://localhost:4545/contacts", {
        method: "POST",
        body: JSON.stringify(messageObj),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          form.value.reset();
         
        }
      });

    }

    
</script>


<template>
     <main>
        <div class="banner contactspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <NavBarComponent/>
                    </div>
                </div>
                <h1 class="title-big">Contact us</h1>
            </div>
        </div>
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
                        <div class="title mt-5">Tell us about your tastes</div>
                        <img class="beanslogo mt-5" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                    
                        <form @submit.prevent="submit" action="/" class="mt-5" ref="form">
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-center">
                                    <label for="name-input" class="mb-0">
                                        Name
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input 
                                        v-model="v$.formData.name.$model"
                                        type="text" 
                                        class="form-control" 
                                        id="name-input"
                                    />
                                    <span v-for="error in v$.formData.name.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-center">
                                    <label for="email-input" class="mb-0">
                                        E-mail
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <!-- v-model="formData.email" -->
                                    <input 
                                        v-model="v$.formData.email.$model"
                                        type="email" 
                                        class="form-control" 
                                        id="email-input"
                                    />
                                    <span v-for="error in v$.formData.email.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="col col-12 col-sm-3 d-flex align-items-center">
                                    <label for="phone-input" class="mb-0">
                                        Phone
                                    </label>
                                </div>
                                <div class="col col-12 col-sm-9">
                                    <input 
                                        v-model="v$.formData.phone.$model"
                                        type="tel" 
                                        class="form-control" 
                                        id="phone-input"
                                    />
                                    <span v-for="error in v$.formData.phone.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>
    
                            <div class="form-group row textarea">
                                <div class="col col-12 d-flex justify-content-center">
                                    <label for="pmessage" class="mb-3 mt-3 text-center">
                                        Your message
                                        <span style="color: red;">*</span>
                                    </label>
                                </div>
                                <div class="col col-12">
                                    <!-- v-model="validForm.value.v$.message.$model" -->
                                    <textarea
                                        v-model="v$.formData.message.$model" 
                                        class="form-control" 
                                        name="message" 
                                        id="message" 
                                        rows="5"
                                        placeholder="Leave your comments here">
                                    </textarea>
                                    <span v-for="error in v$.formData.message.$errors" :key="error.$uid">
                                        {{ error.$message }}
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col col-12 col-sm-9 d-flex align-items-start">
                                <input
                                    v-model="v$.formData.checked.$model"
                                    type="checkbox"
                                    class="form-control"
                                    id="checkbox-input"
                                />
                                <span class="ml-3">Согласен с договором оферты</span>
                                </div>
                            </div>

                            <span v-for="error in v$.formData.checked.$errors" :key="error.$uid">{{
                                error.$message
                            }}</span>
    
                            <div class="row">
                                <div class="col">
                                    <button class="btn btn-outline-dark send-btn">Send us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>
