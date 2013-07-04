#Notes from Graham Harman Texts

##_The Quadruple Object_

####Key Ideas

> For the purposes of this book, an object is anything that has a unified reality that is autonomous from its wider context and also from its own pieces. (116)

> There may be infinite regress, but no infinite progress: no final, encompassing object that could be called a universe. (122)

***

######Objects

> For the purposes of this book, an object is anything that has a unified reality that is autonomous from its wider context and also from its own pieces. (116)

> _any relation immediately generates a new object_ (116)

> If certain components are arranged in such a manner as to give rise to a thing that exceeds them, in such a way that it can withstand certain changes in these components, then they have entered a genuine relation with each other as real objects rather than merely stroking on another's sensual facades. (116)

> Insofar as we somehow connect with a real object outside us, giving rise to perceptions of sensual tress, mailboxes, or blackbirds, we have somehow linked with that object to form a new real object... But if my relation with a tree forms a new object, then I as a real piece of that object find myself on its interior, confronting the mere image of the other piece. Thus we find an asymmetry on the interior of the object, between the real me and the sensual tree. The duality is inescapable: there is always a non-transitive contact in which a real object caresses merely sensual ones. If the tree relates to me as well, this must happen on the interior of a separate but related object. The usual mistake lies in obeying the Taxonomic Fallacy - the assumption that this asymmetry results from the intersection between two different _kinds_ of entities. (116-7)

> Hence, the true duality is not between minds and bodies, but between real and sensual objects. (117-8)

__This illustrates the formation of an object. Objects can be formed from:__
*	pulling from an API that connects to a database of static content (eg. tumblr posts, tweets, etc)
*	dissecting another object, pulling out key components (such as quotes, images, videos, tags, etc)
*	combining multiple objects
*	pulling from a live streaming API of sensor flow data (eg. temperature sensor, light sensor, video stream, etc)

***

######Object-Object Relations

> Recall that the sensual is what exists only in relation to the perceiver, and that the real is whatever withdraws from that relation. But if we consider a real hammer, it is not just withdrawn from any relation that other entities might have with it. The hammer is also _composed_ of relations between its component objects. (110)

> It is not enough to think of an object as existing in two forms: first in itself, and second as it appears in any relation. Instead, the object is a walled island that differs from relations in both directions. (111)

> Given that an object must inherently be a unity, its multitude of qualities can only arise from the plurality of its pieces. Thus this is no object without pieces, and an infinite regress occurs. (112)

> Human consciousness does not transcend the cosmos and observe it from a neutral scientific void, but forever burrows through an intermediate layer of reality, no more aware of the larger objects to which it belongs than of the tool-beings that withdraw from it. (114)

> Object-oriented ontology holds that the human-world relation has no privilege at all. (119)

> [Rather than between humans and non-humans,] the basica rift in the cosmos lies between objects and relations in general: between their autonomous reality outside all relation, and their caricatured form in the sensual life of other objects. (119-20)

> If all relations are on the same footing, and all relations are equally inept at exhausting the depths of their terms, then an intermediate form of contact between things must be possible. This contact can only take a _sensual_ form, since it can only encounter translated or distorted versions of other objects. (120)

> While it is true that a real object arises from a descending chain of countless smaller components, it does not follow that it must also enter further relations as a component of larger objects. (122)

Objects have relations in two axes: vertical and horizontal. Vertical relations are those component pieces that make up a real object. Horizontal relations are relations to other objects in the world, and are thus reserved only for sensual objects.

__Real objects only have vertical relations. Sensual objects only have horizontal relations.__

	RealObject.vertical_relations: []

	SensualObject.horizontal_relations: []

***

######Object-Quality Relations

> Qualities cannot be encountered in a vacuum, but are always emanated or emitted from some sensual object (120)

> Even inanimate objects do not react to all the data available to them; minute fluctuations in the surface of a table may affect a paperweight in some way without the paperweight ceasing to encounter it as a table. (120-1)

> The rift between sensual objects and their qualities is not a special poignant feature of animal or human mentality, but belongs to the very structure of the relation. (121)

> We must always avoid the Taxonomic Fallacy by not distributing the terms "perceiving" and "non-perceiving" among specific _kinds_ of entities. Instead, perceiving and non-perceiving must be found in the same entity at different times; they are modes of being rather than types of object. (121)

> Objects do not perceive insofar as they _exist_, as panpsychism proclaims. Instead, they perceive insofar as the _relate_. (121-2)

> Recall that to perceive means to encounter sensual objects on the interior of a larger object, and that a real entity is located on such an interior thanks to a relation it makes with a _component_ of that more encompassing object. (122)

> Not all objects perceive at all times; some objects are sleeping, or _dormant_... In principle, some objects might remain dormant forever. (122,123)

> An object is real when it forms an autonomous unit able to withstand certain changes in its pieces. (122)


__By separating sensual object and qualities, changes in the qualities of a sensual object that is in relation to another need not affect the other object.__

	Schema
		SensualObject.sensual_qualities: new SensualQualities({
			data: data
			})

__Dormant objects are those real objects that have not been annotated, highlighted and dissected into component parts.__

__When we pull elements from a real object by annotating, highlighting, dissecting, they become sensual objects?__

__A tumblr post, for instance, is a real object because we can make changes to the tumblr post on tumblr, re-sync, and it will still have the same id, be largely the same content, and thus the same real object, it will just have had some of its qualities changed (tags, caption, images, etc).__

	RealObject Schema
		id: String,
		created: Date,
		updated: Date,
		source: String,//eg. hostname.tumblr.com


***

#####Ontography

> The senssual object cannot possibly exist except in tension with its sensual qualities (time) and its real qualities (eidos), insofar as the sensual object is never something truly autonomous. (126)

> What is required in these case, if anything new is ever to happen, is _fission_ between the two poles [of sensual object and sensual qualities]. (126)

__Sensual objects will always have sensual qualities and real qualities. Maybe real qualities should be static and sensual qualities should be feeds from sensors, because the only way for newness to happen is a fission between them. Maybe each new pulse of a sensor should create a new sensual quality, and delete the previous?__

> Two real or two sensual qualities are linked only insofar as they both belong to the same object. (126)

__There is no direct link between different qualities, they are only ever linked indirectly through a parent object.__

> As for the bond between two real objects, the founding principle of object-oriented philosophy is the insight that such objects make no direct link whatsoever. (128)

> In the case of any pairing of qualities, it is obvious that their normal state of existence is to be bound together in the same object: the multiple accidents of a sensual tree belong together only through the mediation of the tree, and the same holds for its numerous real qualities. (131)



***

####Terms

__Taxonomic Fallacy__
Wrongly ascribing two different ontological structures to two separate _kinds_ of beings. Harman prefers that everything is just an object, which avoids correlationism.

__Speculative Psychology__
> Skrbina observes that panpsychism has no need to project special human traits onto rocks and atoms. In fact, philosophy needs a more dedicated speculation on the different levels of psyche at different levels of objects: a still nonexistant field that I like to call "speculative psychology". (120)

__Polypsychism__
> Despite my insistence that panpsychism should not be mocked, I cannot defend its use of the prefix pan-, or "all." Hence I will speak of _polypsychism_, in order to stress that the roster of experiencing entities must indeed balloon beyond all previous limits, but without quite extending to _all_ entities. (121)

__Heterogeneous Pair__
An object-quality pair (125)

__Tension__
The relationship between a heterogeneous pair is always in tension, whether it is a "banal" relation (SO-SQ, SO-RQ) that requires fission to break it apart, or a relation that require fusion to fuse it together (RO-SQ, RO-RQ).

__Emanate__
Sensual qualities emanate from a sensual object. Taken from a neo-platonic lexicon. (127)

__Contraction__
Real qualities contract from a sensual object. Taken from Nicholas de Cusa. (127)

__Duplicity__
The RQ-SQ pair in an SO. (127-8)

__Contiguity__
> Sensual objects are linked only through their _contiguity_ in the same field of experience for a single observer: I encounter not just one sensual object at a time, but many.

__Withdrawl__
> If two sensual objects can never be anything better than contiguous, two real objects co-exist in the manner of _withdrawl_, having no interrelation at all. (128)

__Sincerity__
> This leaves only the RO-SO pair, which we have called the _sincerity_ of immediate contact. Here, the experiencer as a real object is in direct contact with a sensual object. (128)
