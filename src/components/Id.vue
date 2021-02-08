<template>
<div id="IdE">
    <b-container fluid>
        <b-row>
            <b-col text="Drop-Right">
                <p >Welcome  <b-avatar variant="success"></b-avatar> {{$store.getters.user.data.email}} </p>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>