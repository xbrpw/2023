/**
 * FormSelect Class.
 * Used to create custom form select menus from regular input fields.
 * @author Rainner Lins @raintek_
 */
(function()
{
    // global class name
    var _class = "Modal";

    // check env
    if( !window || window[ _class ] ) return;

    // class
    window[ _class ] = function( trigger, options )
    {
        this._trigger = null;
        this._overlay = null;
        this._wrap    = null;
        this._content = null;
        this._buttons = null;
        this._confirm = null;
        this._dismiss = null;
        this._state   = "";
        this._options = {
            // modal type (static, element, ajax)
            "modalType"    : "static",
            "modalContent" : "No content specified.",
            // confirm button
            "confirmText"  : "✔ Confirm",
            "onConfirm"    : null,
            // dismiss button
            "dismissText"  : "✘",
            "onDismiss"    : null,
        };

        this.createModal   = this.createModal.bind( this );
        this.removeModal   = this.removeModal.bind( this );
        this.dontPropagate = this.dontPropagate.bind( this );
        this.onConfirm     = this.onConfirm.bind( this );
        this.onDismiss     = this.onDismiss.bind( this );

        this.setTrigger( trigger );
        this.setOptions( options );
        this.buildObjects();
    };

    // prototype
    window[ _class ].prototype = {
        constructor: window[ _class ],

        // set the modal trigger and events
        setTrigger: function( trigger )
        {
            if( typeof trigger === "string" )
            {
                trigger = ( /^([\w\-]+)$/.test( trigger ) )
                ? document.getElementById( trigger )
                : document.querySelector( trigger );
            }
            if( typeof trigger === "object" )
            {
                this._trigger = trigger;
                this._trigger.addEventListener( "click", this.createModal );
                this.setOptions({
                    "modalType"    : this.getProp( trigger, "data-modal", "string", this._options.modalType ),
                    "modalContent" : this.getProp( trigger, "data-content", "string", this._options.modalContent ),
                    "confirmText"  : this.getProp( trigger, "data-confirm-text", "string", this._options.confirmText ),
                    "dismissText"  : this.getProp( trigger, "data-dismiss-text", "string", this._options.dismissText ),
                });
            }
        },

        // set custom options
        setOptions: function( options )
        {
            if( typeof options === 'object' )
            {
                for( var key in options )
                {
                    if( options.hasOwnProperty( key ) )
                    {
                        this._options[ key ] = options[ key ];
                    }
                }
            }
        },

        // extract property from an element's data attributes
        getProp: function( elm, attr, type, deft )
        {
            if( typeof elm === "object" && typeof attr === "string" )
            {
                var value = ( elm.getAttribute ) ? elm.getAttribute( attr ) : null;

                if( value && typeof value === "string" )
                {
                    if( /^(int|integer|number|float|double)$/i.test( type ) )
                    {
                        value = 0 + value.replace( /[^\d\-\.]+/, "" );
                    }
                    if( /^(bool|boolean)$/i.test( type ) )
                    {
                        value = ( /^(on|enabled|true|yes|y|1)$/i.test( value ) ) ? true : false;
                    }
                    return value;
                }
            }
            return deft;
        },

        // build modal objects
        buildObjects: function()
        {
            // <div class="modal-overlay">
            //     <div class="modal-wrap">
            //         <div class="modal-content"></div>
            //         <div class="modal-buttons">
            //             <button class="modal-cofirm">Confirm</button>
            //             <button class="modal-dismiss">Dismiss</button>
            //         </div>
            //     </div>
            // </div>

            this._overlay = document.createElement( "div" );
            this._overlay.className = "modal-overlay";
            this._overlay.addEventListener( "click", this.removeModal );

            this._wrap = document.createElement( "div" );
            this._wrap.className = "modal-wrap";
            this._overlay.appendChild( this._wrap );

            this._content = document.createElement( "div" );
            this._content.className = "modal-content";
            this._content.addEventListener( "click", this.dontPropagate );
            this._wrap.appendChild( this._content );

            this._buttons = document.createElement( "div" );
            this._buttons.className = "modal-buttons";
            this._wrap.appendChild( this._buttons );

            if( this._options.onConfirm )
            {
                this._confirm = document.createElement( "button" );
                this._confirm.className = "modal-confirm";
                this._confirm.innerHTML = this._options.confirmText;
                this._confirm.addEventListener( "click", this.onConfirm );
                this._buttons.appendChild( this._confirm );
            }
            this._dismiss = document.createElement( "button" );
            this._dismiss.className = "modal-dismiss";
            this._dismiss.innerHTML = this._options.dismissText;
            this._dismiss.addEventListener( "click", this.onDismiss );
            this._buttons.appendChild( this._dismiss );
        },

        // resolve modal content and set active state
        createModal: function()
        {
            if( this._overlay )
            {
                // default init loading state
                document.body.appendChild( this._overlay );
                this.setState( "loading" );

                // load static attribute content
                if( this._options.modalType === "static" )
                {
                    this.setState( "active", this._options.modalContent );
                    return;
                }
                // load content from another element
                if( this._options.modalType === "element" )
                {
                    var elm = document.querySelector( this._options.modalContent );
                    this.setState( "active", elm ? elm.innerHTML : "Could not load content from DOM element ("+ this._options.modalContent +")." );
                    return;
                }
                // load content from ajax request
                if( this._options.modalType === "ajax" )
                {
                    if( window.XMLHttpRequest ){ xhr = new XMLHttpRequest(); } else
                    if( window.ActiveXObject ) { xhr = new ActiveXObject( "Microsoft.XMLHTTP" ); }
                    if( xhr )
                    {
                        var func = function()
                        {
                            if( xhr.readyState === 4 )
                            {
                                if( xhr.status === 0 )
                                {
                                    return this.setState( "active", "Could not fetch content from ("+ this._options.modalContent +")." );
                                }
                                if( !xhr.responseText )
                                {
                                    return this.setState( "active", "Got no response data from ("+ this._options.modalContent +")." );
                                }
                                return this.setState( "active", xhr.responseText );
                            }
                        };
                        xhr.open( "GET", this._options.modalContent, true );
                        xhr.onreadystatechange = func.bind( this );
                        xhr.send();
                    }
                    return;
                }
                // all other unknown types
                this.setState( "active", "Could not load content, no valid content type specified." );
            }
        },

        // remove modal markup from document
        removeModal: function()
        {
            if( this._overlay )
            {
                var func = function() {
                    document.body.removeChild( this._overlay );
                }
                this.setState( "dismiss" );
                setTimeout( func.bind( this ), 500 );
            }
        },

        // set the modal state and content
        setState: function( state, content )
        {
            if( state && typeof state === "string" && this._overlay && this._content )
            {
                var func = function() {
                    this._content.innerHTML = String( content || "" );
                    this._overlay.classList.remove( "loading" );
                    this._overlay.classList.remove( "active" );
                    this._overlay.classList.remove( "dismiss" );
                    this._overlay.classList.add( state );
                }
                setTimeout( func.bind( this ), 60 );
                this._state = state;
            }
            return state;
        },

        // stop object event from propagating
        dontPropagate: function( e )
        {
            if( this._state === "active" && e )
            {
                e.stopPropagation();
            }
        },

        // on confirm handler
        onConfirm: function( e )
        {
            this.dontPropagate( e );

            if( typeof this._options.onConfirm === "function" )
            {
                this._options.onConfirm.call( this );
            }
        },

        // on dismiss handler
        onDismiss: function( e )
        {
            this.dontPropagate( e );

            if( typeof this._options.onDismiss === "function" )
            {
                this._options.onDismiss.call( this );
            }
            this.removeModal();
        },

    };

})();


/**
 * Usage
 */
var items = document.querySelectorAll( "[data-modal]" ),
    options = {
        onConfirm: function(){ alert( "OK" ); },
    };

for( var i = 0; i < items.length; i++ )
{
   new Modal( items[ i ], options );
}
