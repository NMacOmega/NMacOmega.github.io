<script>
    export let props = {}, type = "inner"; 
    let {name, title = "", 
    onIconHover, 
    onClick, 
    onReleaseHover, 
    href, 
    component, 
    reNotOnSpriteSheet, 
    isHovering = false} 
    = props;
</script>


<li
class="techs__item techs__item--{type}"
on:mouseover={() => onIconHover(title)}
on:mouseleave={onReleaseHover}
on:focus
on:click={() => onClick(title, component)}
on:keydown
>
<div
    class="techs__icon techs__icon--{type}"
    style={`animation-play-state: ${isHovering ? 'paused' : 'running'};`}
    >
    {#if name.match(reNotOnSpriteSheet)}
        <img
            src={href}
            alt="Logo SVG"
            class="techs__svg techs__svg--{type} techs__svg--{name}"
        />
    {:else}
        <svg class="techs__svg techs__svg--{type} techs__svg--{name}">
            <use xlink:href={href} />
        </svg>
    {/if}
</div>
</li>