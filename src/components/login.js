let currentAccessed = null;
const effectQueue = [];


class Signal {
constructor(initialValue) {
this._value = initialValue;
this._dependents = [];
}

get value() {
if (currentAccessed) {
this._addDependent(currentAccessed);
}
return this._value;
}

set value(newValue) {
if (this._value !== newValue) {
this._value = newValue;
this._notifyDependents();
executeEffects();
}
}

_addDependent(dependent) {
if (!this._dependents.includes(dependent)) {
this._dependents.push(dependent);
}
}

_removeDependent(dependent) {
this._dependents = this._dependents.filter((dep) => dep !== dependent);
}

_notifyDependents() {
for (const dependent of this._dependents) {
dependent._update();
}
}
}

class Computed {
constructor(computeFn) {
this._computeFn = computeFn;
this._value = undefined;
this._isStale = true;
this._dependents = [];
}

get value() {
if (this._isStale) {
const previousContext = currentAccessed;
currentAccessed = this;
this._recomputeValue();
currentAccessed = previousContext;
}
if (currentAccessed) {
this._addDependent(currentAccessed);
}

return this._value;
}

_recomputeValue() {
this._value = this._computeFn();
this._isStale = false;
}

_addDependent(dependent) {
if (!this._dependents.includes(dependent)) {
this._dependents.push(dependent);
}
}


_update() {
if (!this._isStale) {
this._isStale = true;
for (const dependent of this._dependents) {
dependent._update();
}
}
}
}

// Store the current context (a Computed or Effect instance) for dependency tracking


class Effect {
constructor(effectFn) {
this._effectFn = effectFn;
this._isStale = true;
this._execute();
}

_execute() {
if (this._isStale) {
currentAccessed = this;
this._effectFn();
currentAccessed = null;
}
this._isStale = false;
}

_update() {
if (!this._isStale) {
this._isStale = true;
effectQueue.push(this);
}
}
}

function executeEffects() {
while (effectQueue.length > 0) {
const effect = effectQueue.shift();
effect._execute();
}
}


function createSignal(initialValue) {
return new Signal(initialValue);
}

function createComputed(computeFn) {
return new Computed(computeFn);
}

function createEffect(effectFn) {
return new Effect(effectFn);
}

const userslist = ["Rakesh" , "Rajesh" , "Ramesh" , "Rakhi"]
const loggedIn = createSignal(false)
const user = createSignal("")

if (userslist.includes(localStorage.getItem("loggedIn"))){
loggedIn.value = true
user.value = localStorage.getItem("loggedIn")
}

createEffect(() => {

if (!loggedIn.value){
window.lg.style.display = "none"
}else {
window.lg.style.display = "block"
}

})

/** @type {HTMLButtonElement} */




var zpassword = "tree123#@"

document.body.onload = () => {
/** @type {HTMLDialogElement} */
var modal = window.modal
const loginbtn = window.login
loginbtn.addEventListener("click", () => {
if (loggedIn.value) {
return
}
modal.style.display = "grid"
modal.classList.add("opacity-100")
modal.showModal()
})


/** @type {import('./types').HTMLEMailInput} */
var email = window.email
/** @type {HTMLInputElement} */
var password = window.pass
window.cbtn.addEventListener("click", () => {
modal.classList.remove("opacity-100")
modal.classList.add("opacity-0")
modal.style.display = "none"
modal.close()
})
window.dform.addEventListener("submit", () => {
switch (email.value){
case (" "):{
console.log(password.value, password)
if (password.value == zpassword) {
console.log("Logged In")
user.value = "Rajesh"
login("Rajesh")
}
}
case ("bhupendrafromus@gmail.com"):{
if (password.value == zpassword) {
console.log("Logged In")
user.value = "Bhupendra"
login("Bhupendra")
}
}
}
modal.style.display = "none"
modal.close()
})
window.lg.addEventListener("click", () => {
localStorage.removeItem("loggedIn")
loggedIn.value= false
user.value = ""
})

function login(user){
loggedIn.value = true
localStorage.setItem("loggedIn",user)
}

createEffect(() => {
if (loggedIn.value == true){
loginbtn.innerHTML = user.value
}else {
loginbtn.innerHTML = "Log In"
}
})


}