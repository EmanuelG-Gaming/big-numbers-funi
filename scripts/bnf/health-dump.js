// Just dump the health aleardy

Vars.content.units().each(h=>h.health = Number.MAX-VALUE);
Vars.content.blocks().each(i=>i.health = Number.MAX-VALUE);
