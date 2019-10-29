(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{180:function(t,e,r){"use strict";r.r(e);var a=r(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("ul",[r("li",[t._v("Improved "),r("router-link",{attrs:{to:"/Party.html"}},[r("code",[t._v("Party")])]),t._v(" and "),r("router-link",{attrs:{to:"/PartyMember.html"}},[r("code",[t._v("PartyMember")])]),t._v(" obejcts.")],1)]),t._v(" "),t._m(2),t._v(" "),r("ul",[r("li",[t._v("Added filter argument for "),r("router-link",{attrs:{to:"/Communicator.html#waitforevent-event-timeout"}},[r("code",[t._v("waitForEvent()")])]),t._v(" method.")],1),t._v(" "),r("li",[t._v("Improved "),r("router-link",{attrs:{to:"/Client.html#getfriendstatus-id"}},[r("code",[t._v("getFriendStatus(id)")])]),t._v(" method.")],1)]),t._v(" "),t._m(3),t._v(" "),r("ul",[r("li",[t._v("Added temporary solution for problem with accepting invitations (in few cases). Thanks "),r("a",{attrs:{href:"https://github.com/Terbau",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terbau"),r("OutboundLink")],1),t._v(" for "),r("a",{attrs:{href:"https://github.com/SzymonLisowiec/node-epicgames-client/pull/52",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("Added "),r("router-link",{attrs:{to:"/Communicator.html#waitforevent-event-timeout"}},[r("code",[t._v("waitForEvent()")])]),t._v(" method to "),r("code",[t._v("Communicator")]),t._v(". Thanks "),r("a",{attrs:{href:"https://github.com/Terbau",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terbau"),r("OutboundLink")],1),t._v(" for "),r("a",{attrs:{href:"https://github.com/SzymonLisowiec/node-epicgames-client/pull/52",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),r("OutboundLink")],1),t._v(".")],1),t._v(" "),r("li",[t._v("Added "),r("code",[t._v("getFriendStatus(id)")]),t._v(" method for "),r("code",[t._v("Launcher")]),t._v(" ("),r("code",[t._v("Client")]),t._v("). Thanks "),r("a",{attrs:{href:"https://github.com/Terbau",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terbau"),r("OutboundLink")],1),t._v(" for "),r("a",{attrs:{href:"https://github.com/SzymonLisowiec/node-epicgames-client/pull/52",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),r("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("ul",[r("li",[t._v("Added possibility to fetch more than 100 profiles through "),r("code",[t._v("getProfiles()")]),t._v(" method. Thanks "),r("a",{attrs:{href:"https://github.com/iXyles",target:"_blank",rel:"noopener noreferrer"}},[t._v("iXyles"),r("OutboundLink")],1),t._v(" for "),r("a",{attrs:{href:"https://github.com/SzymonLisowiec/node-epicgames-client/pull/47",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("You can accept/reject invitation to the party from now on.")]),t._v(" "),t._m(10),t._v(" "),r("li",[t._v("Improved updating local the party's privacy state. If you invite bot to private lobby, and leave him alone, bot will understand the party's privacy and you can't join to him without invite.")]),t._v(" "),r("li",[t._v("Improved updating account's presence according to him the party's state.")]),t._v(" "),r("li",[t._v("Other fixes")])]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("ul",[t._m(14),t._v(" "),t._m(15),t._v(" "),r("li",[t._v("Added "),r("code",[t._v("Member.promote()")]),t._v(" and "),r("code",[t._v("Party.promote(member)")]),t._v(" methods. Thanks "),r("a",{attrs:{href:"https://github.com/iXyles",target:"_blank",rel:"noopener noreferrer"}},[t._v("iXyles"),r("OutboundLink")],1),t._v(" for "),r("a",{attrs:{href:"https://github.com/SzymonLisowiec/node-epicgames-client/pull/41",target:"_blank",rel:"noopener noreferrer"}},[t._v("PR"),r("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),r("li",[t._v("some fixes")])]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),r("ul",[t._m(23),t._v(" "),t._m(24),t._v(" "),r("li",[r("code",[t._v("party.findMember()")]),t._v(" currently searching by "),r("code",[t._v("accountId")]),t._v(" and "),r("code",[t._v("PartyMember")]),t._v(" object.\nThanks to: "),r("a",{attrs:{href:"https://github.com/iXyles",target:"_blank",rel:"noopener noreferrer"}},[t._v("iXyles"),r("OutboundLink")],1)])]),t._v(" "),t._m(25),t._v(" "),r("ul",[r("li",[t._v("Fixed "),r("code",[t._v("Party")]),t._v(" methods: "),r("code",[t._v("setCustomMatchKey(key)")]),t._v(" and "),r("code",[t._v("setAllowJoinInProgress(canJoin)")]),t._v(". Thanks "),r("a",{attrs:{href:"https://github.com/iXyles",target:"_blank",rel:"noopener noreferrer"}},[t._v("iXyles"),r("OutboundLink")],1),t._v(" for report.")])]),t._v(" "),t._m(26),t._v(" "),r("ul",[r("li",[t._v("fixed "),r("code",[t._v("getFriends()")]),t._v(" method. Thanks "),r("a",{attrs:{href:"https://github.com/iXyles",target:"_blank",rel:"noopener noreferrer"}},[t._v("iXyles"),r("OutboundLink")],1),t._v(" for PR.")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"changelog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changelog","aria-hidden":"true"}},[this._v("#")]),this._v(" Changelog")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-17"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-17","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.17")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-16"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-16","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.16")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-15"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-15","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.15")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Added Nintendo Switch to platform's enumerator ("),e("code",[this._v("EPlatform")]),this._v(").")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[t._v("Added communicator's events:\n"),r("ul",[r("li",[r("code",[t._v("friend#ID:request")])]),t._v(" "),r("li",[r("code",[t._v("friend#ID:added")])]),t._v(" "),r("li",[r("code",[t._v("friend#ID:removed")])]),t._v(" "),r("li",[r("code",[t._v("friend#ID:status")])]),t._v(" "),r("li",[r("code",[t._v("friend#ID:message")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Updated launcher's "),e("code",[this._v("netCL")]),this._v(", "),e("code",[this._v("build")]),this._v(" and "),e("code",[this._v("engineBuild")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-14"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-14","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.14")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Updated "),e("code",[this._v("enableTwoFactor()")]),this._v(" and "),e("code",[this._v("disableTwoFactor()")]),this._v(" methods.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-13"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-13","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.13")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Fixed error "),e("code",[this._v("errors.com.epicgames.social.party.party_not_found")]),this._v(" while joining to private party.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-12"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-12","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.12")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Fixed error "),e("code",[this._v("user_has_party")]),this._v(".")]),this._v(" "),e("li",[this._v("Integration with new Fortnite update.")]),this._v(" "),e("li",[this._v("Some fixes")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-11"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-11","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.11")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Added enum "),e("code",[this._v("EPartyPrivacy")]),this._v(".")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[t._v("Added "),r("code",[t._v("Client")]),t._v(" options:\n"),r("ul",[r("li",[r("code",[t._v("createPartyOnStart")]),t._v(" - boolean, set to "),r("code",[t._v("false")]),t._v(" if you don't want join to party after login.")]),t._v(" "),r("li",[r("code",[t._v("autoPresenceUpdating")]),t._v(" - boolean, set to "),r("code",[t._v("false")]),t._v(' if you want set our custom status e.g. "Hello Wolrd.". Defautly is '),r("code",[t._v("true")]),t._v(" and bot updating status as real user.")]),t._v(" "),r("li",[r("code",[t._v("defaultPartyConfig")]),t._v(" - object, default state below.")])]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  privacy"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" EPartyPrivacy"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PUBLIC")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  joinConfirmation"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  joinability"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OPEN'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  maxSize"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  subType"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  inviteTTL"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("14400")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  chatEnabled"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[t._v("Added "),r("code",[t._v("setPrivacy(privacy)")]),t._v(" method to "),r("code",[t._v("Party")]),t._v(". "),r("code",[t._v("privacy")]),t._v(" argument is a "),r("code",[t._v("EPartyPrivacy")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Improved "),e("code",[this._v("Meta.get(key, raw)")]),this._v(" method (added "),e("code",[this._v("raw")]),this._v(" argument, set to "),e("code",[this._v("true")]),this._v(" if you don't want parse a value).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Added removing keys in "),e("code",[this._v("Meta")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Fixed removing users from "),e("code",[this._v("Party")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-10"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-10","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.10")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Added event "),e("code",[this._v("party:member:disconnected")]),this._v(" for "),e("code",[this._v("Communicator")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-8","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.8")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Added kicking party members by "),e("code",[this._v("party.kick(accountId)")]),this._v(" or "),e("code",[this._v("member.kick()")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Fixed error "),e("code",[this._v("errors.com.epicgames.social.party.stale_revision")]),this._v(" while updating new party.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-7","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.7")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-0-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-0-6","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.0.6")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",[t._v("removed "),r("code",[t._v("includePending")]),t._v(" attribute from "),r("code",[t._v("getFriends()")]),t._v(". Currently you can get pending friends only by "),r("code",[t._v("getFriendRequests()")]),t._v(" (previously "),r("code",[t._v("getPendingFriends()")]),t._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Added exit process handler for new feature in "),e("code",[this._v("epicgames-fortnite-client")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("Improved checking EULA while running game by "),e("code",[this._v("runGame()")]),this._v(" method.")])}],!1,null,null,null);e.default=n.exports}}]);