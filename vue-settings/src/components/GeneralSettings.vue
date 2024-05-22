<template>
  <div>
    <h2 class="text-2xl mb-4">General</h2>
    <form class="space-y-4 mx-auto">
      <div>
        <label>Username</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div>
        <label>About Me</label>
        <textarea></textarea>
      </div>
      <div>
        <label>Gender</label>
        <label>
          <input type="radio" value="male" />
          <span>Male</span>
        </label>
        <label>
          <input type="radio" value="female" />
          <span>Female</span>
        </label>
        <label>
          <input type="radio" value="other" />
          <span>Other</span>
        </label>
      </div>
      <div>
        <label>Country</label>
        <select>
          <option>USA</option>
          <option>Canada</option>
          <option>UK</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>