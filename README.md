# ModaL
nie dziala mi cos 


Twoim zadaniem jest stworzyć komponent klasowy Modal, który:
zawiera podkomponenty <Modal.Header>, <Modal.Footer>, <Modal.Content>
możesz wykorzystać do tego ContextApi, ale nie musisz

Modal ma mieć:
metodę toggle(), która włącza lub wyłącza modal,
prop isOpen, który jest true/false zależnie od tego czy modal jest włączony/wyłączony,
szare, półprzeźroczyste tło o kolorze rgba(0,0,0,0.5), w które jeśli kliknie użytkownik to modal się wyłączy

Modal.Header ma mieć:
nieklikalne białe tło,
prop title, który renderuje się po lewej stronie,
ma zawierać po prawej stronie, przycisk do zamykania modalu metodą toggle()

Modal.Content ma mieć:
nieklikalne białe tło,
prop children, który jest renderowany wewnątrz tego białego tła,

Modal.Footer ma mieć:
nieklikalne białe tło,
prop callToActionLabel
dwa przyciski po prawej stronie, z którego jeden to cancel a drugi to {callToActionLabel}
oba przyciski mają zamykać modal,
podczas kliknięcia w przycisk z tekstem callToActionLabel, dodatkowo ma wyskakiwać alert z tekstem "OK"



Przetestuj:
metodę togglę dostępną z każdego komponentu, który może z niej skorzystać
że <Modal.Content> wyrenderuje się jako null poza kontekstem
że <Modal.Header> będzie mieć przycisk oraz element h3
że <Modal.Footer> będzie mieć 2 przyciski i oba będą zamykać modal

podkomponenty - https://blog.bitsrc.io/understanding-compound-components-in-react-23c4b84535b5
