<script>
  import FooterItem from "./footerItem.svelte";
</script>

<footer class="footer">
  <ul class="footer-nav">
    <FooterItem num={1} href={"#"} title={"Home"} />
    <FooterItem num={2} href={"#"} title={"About"} />
    <FooterItem num={3} href={"#"} title={"Projects"} />
    <FooterItem num={4} href={"#"} title={"Contact"} />
  </ul>
  <p class="copyright">
    &copy; Nathaniel MacIver. This is my stuff. Please attribute me if you copy
    my stuff. Thanks
  </p>
</footer>

<style lang="scss">
  .footer {
    background-color: var(--color-primary-dark);
    color: var(--color-white);
    padding: 8rem;
    grid-column: 1 / -1;

    &-nav {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
      grid-gap: 2rem;
      align-items: center;
    }
  }

  .copyright {
    font-size: 1.4rem;
    text-align: center;
    width: 70%;
    margin: 8rem auto 0;
  }
</style>
