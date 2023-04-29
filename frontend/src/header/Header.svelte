<script>
    // import { GoogleAuth } from '@beyonk/svelte-social-auth'
    import Logo from '../asset/svg/logo.svelte';
    console.log(process['env'].GOOGLE_CLIENT_ID)

    window.handleCredentialResponse = (response) => {
        const responsePayload = jwt_decode(response.credential);
        console.log("ID: " + responsePayload.sub);
        console.log('Full Name: ' + responsePayload.name);
        console.log('Given Name: ' + responsePayload.given_name);
        console.log('Family Name: ' + responsePayload.family_name);
        console.log("Image URL: " + responsePayload.picture);
        console.log("Email: " + responsePayload.email);
    }
</script>

<div class="header">
    <Logo />
    <div id="g_id_onload"
        data-client_id={process['env'].GOOGLE_CLIENT_ID}
        data-callback="handleCredentialResponse"
        data-auto_prompt="false"
    />
    <div class="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left">
    </div>
</div>

<style>
    .header {
        height: 60px;
        width: calc(100vw - 20px);
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        top: 0;
        left: 0;
    }
</style>